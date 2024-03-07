import { SignIn } from "@clerk/nextjs";
 
const SignInPage = () => {
    return (
    //   <div className='min-h-screen flex justify-center items-center'>
      <div className=''>
        <SignIn />
      </div>
    );
  };
  export default SignInPage;