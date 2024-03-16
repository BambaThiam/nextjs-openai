"use server"

import OpenAI from "openai"
import prisma from "./db"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export const generateChatResponse = async (chatMessages) => {
    try {
        const response = await openai.chat.completions.create({
        messages: [
            {role: "system", content: "you are a helpful assistant"},
            //for context
            ...chatMessages,
            // {role: "user", content: message}
        ],
        model: "gpt-3.5-turbo",
        temperature: 0
    })
    // console.log("data : ",response.choices[0].message)
    // console.log("response : ",response)
    return response.choices[0].message
    } catch (error) {
      return null
    }
}

export const generateTourResponse = async ({city, country}) => {
    const query = `Find a exact ${city} in this exact ${country}.
If ${city} and ${country} exist, create a list of things families can do in this ${city},${country}. 
Once you have a list, create a one-day tour. Response should be  in the following JSON format: 
{
  "tour": {
    "city": "${city}",
    "country": "${country}",
    "title": "title of the tour",
    "description": "short description of the city and tour",
    "stops": ["short paragraph on the stop 1 ", "short paragraph on the stop 2","short paragraph on the stop 3"]
  }
}
"stops" property should include only three stops.
If you can't find info on exact ${city}, or ${city} does not exist, or it's population is less than 1, or it is not located in the following ${country},   return { "tour": null }, with no additional characters.`;
    try {
        const response = await openai.chat.completions.create({
            messages: [
                {role: "system", content: "you are a tout guide"},
                {role: "user", content: query}
            ],
            model: "gpt-3.5-turbo",
            temperature: 0
        })
        // potentially returns a text with error message
        const tourData = JSON.parse(response.choices[0].message.content);

        if (!tourData.tour) {
        return null;
        }
        return tourData.tour

    } catch (error) {
        console.log(error)
        return null
    }
}

// export const getExistingTour = async ({city, country}) => {
//     return prisma.tour.findUnique({
//         where: {
//             city_country: {
//                 city,
//                 country
//             }
//         }
//     })
// }
// export const createNewTour = async (tour) => {
//     return prisma.tour.create({
//         data: tour
//     })
// }

export const getExistingTour = async ({ city, country }) => {
    return prisma.tour.findUnique({
      where: {
        city_country: {
          city,
          country,
        },
      },
    });
  };
  
export const createNewTour = async (tour) => {
    return prisma.tour.create({
      data: tour,
    });
  };
  
export const getAllTours = async (searchTerm) => {
    if(!searchTerm) {
        const tours = await prisma.tour.findMany({
            orderBy: {
                city: 'asc'
            }

        });
        return tours
    }
    const tours = await prisma.tour.findMany({
        where: {
            OR: [
                {
                    city: {
                        contains: searchTerm
                    }
                },
                {
                    country: {
                        contains: searchTerm
                    }
                }
            ]
        },
        orderBy: {
            city: 'asc'
        }
    })
    return tours
}

export const getSingleTour = async (id) => {
    return prisma.tour.findUnique({
        where: {
            id
        }
    })
}


export const generateTourImage = async ({city, country}) => {
    const query = `a panoramic view of the ${city} ${country}`;
    try {
        const tourImage = await openai.images.generate({
            prompt: query,
            n: 1,
            size: "512x512",
        })
        // console.log(response.data.data[0].url)
        return tourImage?.data[0]?.url;
    }
    catch (error) {
        console.log(error)
        return null
    }
}