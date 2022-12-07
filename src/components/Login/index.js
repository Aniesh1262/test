import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import env from "react-dotenv";
import { UserSlice } from "../../redux/user";

const clientId = env.GOOGLE_OAUTH_CLIENT_ID;
function Login() {
  const dispatch = useDispatch();
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const onSuccess = (response) => {
    if (response && response.profileObj) {
      const { name, email, imageUrl } = response.profileObj;
      dispatch(
        UserSlice.actions.updateUserDetails({
          name,
          email,
          imageUrl,
        })
      );
    }
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText={"Login"}
        onSuccess={onSuccess}
        onFailure={(response) =>
          console.log({
            response,
          })
        }
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
