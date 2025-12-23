import { db } from "@repo/database";
import { logoutAction, deleteProjectAction } from "../actions";
import { Button } from "@repo/ui";
import Link from "next/link";

export default async function DashboardPage() {
    const projects = await db.query.projects.findMany({
        where: (projects, { eq }) => eq(projects.owner, 'hana'),
    });

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] p-8 selection:bg-[#bd93f9] selection:text-black">
            <header className="flex justify-between items-center mb-12">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Sistem Yönetimi</h1>
                    <p className="text-xs text-[#666] font-mono uppercase tracking-widest">v2.4.1 Kararlı Sürüm</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-right">
                        <div className="text-xs font-bold">Admin Kullanıcısı</div>
                        <div className="text-[10px] text-[#bd93f9] font-mono">ID: 9482-AD</div>
                    </div>
                    <form action={logoutAction}>
                        <Button className="bg-[#1a1a1a] hover:bg-[#333] text-xs font-mono px-4 py-2 rounded-sm border border-[#333]">
                            OTURUMU_KAPAT
                        </Button>
                    </form>
                </div>
            </header>

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-[#111] p-4 border border-[#333] rounded-sm">
                        <div className="text-[10px] text-[#666] uppercase tracking-widest mb-1">Toplam Proje</div>
                        <div className="text-2xl font-bold">{projects.length}</div>
                    </div>
                    <div className="bg-[#111] p-4 border border-[#333] rounded-sm">
                        <div className="text-[10px] text-[#666] uppercase tracking-widest mb-1">Durum</div>
                        <div className="text-2xl font-bold text-[#bd93f9]">AKTİF</div>
                    </div>
                </div>

                <div className="bg-[#111] border border-[#333] rounded-sm overflow-hidden">
                    <div className="grid grid-cols-12 bg-[#1a1a1a] border-b border-[#333] p-3 text-[10px] text-[#666] uppercase tracking-widest font-mono font-bold">
                        <div className="col-span-1">ID</div>
                        <div className="col-span-5">Proje Başlığı</div>
                        <div className="col-span-3">Etiketler</div>
                        <div className="col-span-3 text-right">İşlemler</div>
                    </div>
                    {projects.map((project, i) => (
                        <div key={project.id} className="grid grid-cols-12 p-4 border-b border-[#333] items-center hover:bg-white/5 transition-colors text-sm">
                            <div className="col-span-1 font-mono text-[#666]">0{i + 1}</div>
                            <div className="col-span-5 font-bold">{project.title}</div>
                            <div className="col-span-3 flex gap-1">
                                {project.tags?.slice(0, 2).map(tag => (
                                    <span key={tag} className="text-[10px] bg-[#222] px-1 rounded">{tag}</span>
                                ))}
                            </div>
                            <div className="col-span-3 flex justify-end gap-2">
                                <Link href={`/dashboard/edit/${project.id}`}>
                                    <Button className="text-[10px] bg-[#bd93f9]/10 text-[#bd93f9] border border-[#bd93f9]/50 hover:bg-[#bd93f9] hover:text-black px-3 py-1 rounded-sm font-mono">
                                        DÜZENLE
                                    </Button>
                                </Link>
                                <form action={deleteProjectAction}>
                                    <input type="hidden" name="id" value={project.id} />
                                    <Button className="text-[10px] bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white px-3 py-1 rounded-sm font-mono">
                                        SİL
                                    </Button>
                                </form>
                            </div>
                        </div>
                    ))}
                    <Link href="/dashboard/new" className="block p-3 text-center bg-[#1a1a1a]/50 text-[#bd93f9] text-xs font-mono hover:bg-[#bd93f9]/10 cursor-pointer transition-colors">
                        + YENİ KAYIT OLUŞTUR
                    </Link>
                </div>
            </div>
        </main>
    );
}
