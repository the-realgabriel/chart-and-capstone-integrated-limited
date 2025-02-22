export default function Footer() {
  return (
    <div className="py-8">
      <div className="line bg-gray-300 w-full h-[0.1rem] my-8"></div>
      <div className="grid px-5 md:grid-cols-3 md:px-32 md:gap-16">
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold text-xl text-gray-800">Partner With Us</h2>
          <p className="font-medium text-gray-700">
            Looking for a reliable partner for your next project? At C&C, we collaborate with businesses, investors, and stakeholders to create meaningful impact. Let’s build the future together!
          </p>
        </div>
        <div className="flex flex-col mt-4">
          <h2 className="font-bold text-xl text-gray-800">Address</h2>
          <p className="font-medium text-gray-700">
            Business Office: <br /> No. 49, Effurun-Sapele Road, Warri, Delta State, Nigeria
          </p>
        </div>
        <div className="flex flex-col mt-4">
          <h2 className="font-bold text-xl text-gray-800">Contact Info</h2>
          <p className="font-medium text-gray-700">
            Call Us: <br /> +234 803 313 3440 <br /> +234 916 024 4807
          </p>
        </div>
      </div>
      <div className="line bg-gray-300 w-full h-[0.1rem] mt-8"></div>
      <p className="text-gray-500 text-center text-base px-5 md:px-32 py-4">
        © 2025 CCL. All Rights Reserved.
      </p>
    </div>
  );
}
