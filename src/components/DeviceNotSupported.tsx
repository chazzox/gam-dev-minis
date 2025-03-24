const DeviceNotSupported = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-black text-white p-6 text-center">
            <h1 className="text-2xl font-bold">Device Not Supported</h1>
            <p className="mt-4 text-lg">
                Please use a supported device to access this feature.
            </p>
        </div>
    );
};
export default DeviceNotSupported;
