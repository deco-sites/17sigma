export default function LoadingAnimation() {
  return (
    <div  className="bg-form-overlay top-0 left-0 flex items-center justify-center bg-blue-500 absolute h-full w-full"  >
        <div className='relative loader-inner ball-scale-ripple-multiple'>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </div>
  );
}
