// Logos.tsx

export default function Logos() {
    return (
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://logos-world.net/wp-content/uploads/2023/08/Uber-Logo.png"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://500.co/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F26187a5473654c43ab7a1b7a54514e5c%252Fa6307e09c88a44efb8ac1ae5fdb00c51&w=3840&q=75"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/wix-company-icon.png"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://mediaresource.sfo2.digitaloceanspaces.com/wp-content/uploads/2024/09/15044315/Notion-Logo-Icon-PNG.png"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://images.seeklogo.com/logo-png/37/2/tiktok-share-icon-black-logo-png_seeklogo-373029.png"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    );
  }