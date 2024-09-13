import ContactButton from "@/app/__components/ContactButton";
import PropertyList from "@/app/__components/properties/PropertyList";
import Image from "next/image";


const LandlordDetailPage = async ({ params }: { params: { id: string }}) => {

    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <aside className="col-span-1 mb-4">
                    <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
                        <Image
                            src="/paulImage.png"
                            width={200}
                            height={200}
                            alt="Landlrod name"
                            className="rounded-full"
                        />

                        <h1 className="mt-6 text-2xl">Paul Hunman</h1>

                        
                            <ContactButton />
                    </div>
                </aside>

                <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <PropertyList />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LandlordDetailPage;