import { getProviders, signIn } from 'next-auth/react';

const SignIn = ({ providers }) => {
  return (
    <>
      {Object.values(providers).map(provider => (
        <div key={provider.name}>
          <button
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: `${window.location.origin}/profile`
              })
            }
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
};

export default SignIn;

export const getServerSideProps = async () => {
  return { props: { providers: await getProviders() } };
};
