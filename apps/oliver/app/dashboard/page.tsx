import { db } from "@repo/database";
import { logoutAction, deleteProjectAction } from "../actions";
import { Button } from "@repo/ui";
import Link from "next/link";

export default async function DashboardPage() {
    const projects = await db.query.projects.findMany({
        where: (projects, { eq }) => eq(projects.owner, 'oliver'),
    });

    return (
        <main className="min-h-screen bg-black text-white font-mono p-8 selection:bg-[#ff4d4d] selection:text-black">
            <div className="flex justify-between items-center mb-12 border-b border-[#333] pb-4">
                <h1 className="text-xl text-[#ff4d4d] font-bold tracking-widest">
                    [ROOT_ACCESS] / GÖSTERGE_PANELİ
                </h1>
                <form action={logoutAction}>
                    <Button className="text-xs border border-[#333] px-4 py-2 hover:bg-[#ff4d4d] hover:text-black transition-colors rounded-none bg-transparent">
                        ÇIKIŞ_YAP
                    </Button>
                </form>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="bg-[#111] border border-[#333] p-4 mb-4 text-xs text-gray-500">
                    &gt;$ status --check<br />
                    SİSTEM: ÇEVRİMİÇİ<br />
                    KULLANICI: root<br />
                    ERİŞİM: TAM YETKİ
                </div>

                <div className="space-y-4">
                    {projects.map(project => (
                        <div key={project.id} className="border border-[#333] p-4 flex justify-between items-center hover:border-[#ff4d4d]/50 transition-colors bg-[#080808]">
                            <div>
                                <h3 className="font-bold text-[#ff4d4d]">{project.title}</h3>
                                <p className="text-xs text-gray-500 truncate max-w-md">{project.description}</p>
                            </div>
                            <div className="flex gap-2">
                                <Link href={`/dashboard/edit/${project.id}`}>
                                    <Button className="text-[10px] uppercase bg-[#ff4d4d]/10 text-[#ff4d4d] hover:bg-[#ff4d4d] hover:text-black font-bold px-3 py-1 rounded-none border border-[#ff4d4d]/20">
                                        DÜZENLE
                                    </Button>
                                </Link>
                                <form action={deleteProjectAction}>
                                    <input type="hidden" name="id" value={project.id} />
                                    <Button className="text-[10px] uppercase bg-transparent text-gray-500 hover:text-white px-3 py-1 rounded-none border border-[#333]">
                                        SİL
                                    </Button>
                                </form>
                            </div>
                        </div>
                    ))}
                </div>

                <Link href="/dashboard/new" className="block mt-8 border text-center p-8 border-dashed border-[#333] text-gray-600 hover:border-[#ff4d4d] hover:text-[#ff4d4d] cursor-pointer transition-colors">
                    + YENİ_PROJE_BAŞLAT
                </Link>
            </div>
        </main>
    );
}
