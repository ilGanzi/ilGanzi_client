import Lottie from "lottie-react";
import loadingLottie from "../assets/lottie/loadingLottie.json";

function LoadingScreen() {
  return (
    <LoadingScreenContainer>
      <LottieContainer>
        <Lottie animationData={loadingLottie} />
      </LottieContainer>
    </LoadingScreenContainer>
  );
}

export default LoadingScreen;