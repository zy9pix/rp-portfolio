import { Button } from "@repo/ui";
import { updateProjectAction } from "../../../actions";
import Link from "next/link";
import { db } from "@repo/database";
import { notFound } from "next/navigation";

export default async function EditProjectPage({ params }: { params: { id: string } }) {
    const project = await db.query.projects.findFirst({
        where: (projects, { eq }) => eq(projects.id, params.id),
    });

    if (!project) notFound();

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] p-8 flex justify-center selection:bg-[#bd93f9] selection:text-black">
            <div className="w-full max-w-3xl">
                <header className="mb-8 flex justify-between items-center border-b border-[#333] pb-4">
                    <h1 className="text-2xl font-bold tracking-tight">Kayıt Düzenle: {project.slug}</h1>
                    <Link href="/dashboard" className="text-xs text-[#bd93f9] font-mono hover:underline">
                        &lt; GERİ DÖN
                    </Link>
                </header>

                <form action={updateProjectAction} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="hidden" name="id" value={project.id} />

                    <div className="md:col-span-2">
                        <label className="block text-[10px] uppercase text-[#666] mb-1 font-mono">Proje Adı</label>
                        <input name="title" defaultValue={project.title} required className="w-full bg-[#111] border border-[#333] p-3 text-sm focus:border-[#bd93f9] outline-none rounded-sm" />
                    </div>

                    <div>
                        <label className="block text-[10px] uppercase text-[#666] mb-1 font-mono">Benzersiz Kimlik (Slug)</label>
                        <input name="slug" defaultValue={project.slug} required className="w-full bg-[#111] border border-[#333] p-3 text-sm focus:border-[#bd93f9] outline-none rounded-sm" />
                    </div>

                    <div>
                        <label className="block text-[10px] uppercase text-[#666] mb-1 font-mono">Teknoloji Yığını (Tags)</label>
                        <input name="tags" defaultValue={project.tags?.join(", ")} className="w-full bg-[#111] border border-[#333] p-3 text-sm focus:border-[#bd93f9] outline-none rounded-sm" />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-[10px] uppercase text-[#666] mb-1 font-mono">Harici Erişim Bağlantısı</label>
                        <input name="link" defaultValue={project.link || ""} className="w-full bg-[#111] border border-[#333] p-3 text-sm focus:border-[#bd93f9] outline-none rounded-sm" />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-[10px] uppercase text-[#666] mb-1 font-mono">Özet Açıklama</label>
                        <textarea name="description" defaultValue={project.description} required rows={3} className="w-full bg-[#111] border border-[#333] p-3 text-sm focus:border-[#bd93f9] outline-none rounded-sm" />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-[10px] uppercase text-[#666] mb-1 font-mono">Dokümantasyon (İçerik)</label>
                        <textarea name="content" defaultValue={project.content} required rows={12} className="w-full bg-[#111] border border-[#333] p-3 text-sm focus:border-[#bd93f9] outline-none rounded-sm font-mono" />
                    </div>

                    <div className="md:col-span-2 pt-4">
                        <Button className="w-full bg-[#bd93f9] text-black hover:bg-[#a77df5] font-bold text-xs uppercase py-4 rounded-sm tracking-widest">
                            DEĞİŞİKLİKLERİ KAYDET
                        </Button>
                    </div>
                </form>
            </div>
        </main>
    )
}
