import { Button } from "@repo/ui";
import { ProjectList } from "@/components/project-list";
import { db } from "@repo/database";
import Link from "next/link";

export const revalidate = 0;

export default async function Page() {
    const projects = await db.query.projects.findMany({
        where: (projects, { eq }) => eq(projects.owner, 'hana'),
        orderBy: (projects, { desc }) => [desc(projects.createdAt)],
    });

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] p-8 lg:p-24 selection:bg-[#bd93f9] selection:text-black">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

                {/* Sidebar / Info */}
                <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
                    <div className="mb-12">
                        <p className="text-[#bd93f9] mb-2 tracking-widest text-[10px] uppercase font-mono">Kimlik_Doğrulandı</p>
                        <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tighter leading-[0.9]">
                            HANA<br /><span className="text-[#333]">STERLING</span>
                        </h1>
                        <div className="w-12 h-1 bg-[#bd93f9] mb-8" />
                        <p className="text-[#888] font-sans text-sm leading-relaxed mb-8">
                            Yüksek kullanılabilirliğe sahip altyapılar ve otomasyonlu endüstriyel kontrol sistemleri konusunda uzmanlaşmış Kıdemli Sistem Mimarı.
                            <br /><br />
                            Şu anda: <span className="text-white">Los Santos Güç Şebekesi Optimize Ediliyor</span>
                        </p>

                        <div className="flex flex-col gap-4 items-start">
                            <span className="text-[10px] text-[#444] font-mono uppercase">Hızlı İşlemler</span>
                            <Link href="https://facebrowser-tr.gta.world/hana" target="_blank" className="w-full">
                                <Button className="w-full justify-between bg-white/5 hover:bg-white/10 border border-[#333] text-[#e5e5e5] rounded-none text-xs font-mono py-6">
                                    <span>İLETİŞİM</span>
                                    <span>@</span>
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="text-[10px] text-[#333] font-mono">
                        KİMLİK: 9482-AD-291<br />
                        KONUM: SAN FIERRO / LOS SANTOS
                    </div>
                </div>

                {/* content */}
                <div className="lg:col-span-8 flex flex-col justify-center">
                    <ProjectList projects={projects} />
                </div>
            </div>
        </main>
    );
}
