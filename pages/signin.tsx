import FormSignIn from '../components/FormSignIn';
import MainLayout from '../components/MainLayout';

const SignIn = () => {
  return (
<MainLayout title={'signIn'} description={'signIn'}> 
<div className="signIn-form"> 
      <FormSignIn></FormSignIn>
      </div>
      </MainLayout>
  );
};

export default SignIn;
