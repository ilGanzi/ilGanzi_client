import { useSetScreenSize } from "../../setScreenHeight";

const LoadingScreen = () => {
    useSetScreenSize();
  return (
    <styles.LoadingScreenContainer>
      <styles.LottieContainer>
        <Lottie animationData={loadingLottie} />
      </styles.LottieContainer>
    </styles.LoadingScreenContainer>
  );
};

export default LoadingScreen;