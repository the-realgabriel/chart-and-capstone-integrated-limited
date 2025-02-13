export default function Footer() {
  return (
    <div>
    <div className="line bg-gray-300 w-full h-[0.1rem] my-8"></div>
    <div className="grid px-5 md:grid-cols-3 md:px-32 md:gap-16">
      <div className="flex-col">
        <h2 className="font-bold text-xl">About Us</h2>
        <p className="font-semibold mt-4">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqualorem
          ipsum dolor sit amet, consectetur adipiscing elit eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div>
      <h2 className="font-bold text-xl">Address</h2>
      <p className="font-semibold mt-4">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqualorem
          ipsum dolor sit amet, consectetur adipiscing elit eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div>
      <h2 className="font-bold text-xl">Contact Info</h2>
      <p className="font-semibold mt-4">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqualorem
          ipsum dolor sit amet, consectetur adipiscing elit eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    <div className="line bg-gray-300 w-full h-[0.1rem] mt-8"></div>
    <p className="text-gray-500 text-base px-5 md:px-32 py-4">© 2025 CCL. All Rights Reserved.</p>
    </div>
  );
}
