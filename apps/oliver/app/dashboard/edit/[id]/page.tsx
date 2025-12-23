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
        <main className="min-h-screen bg-black text-white font-mono p-8 selection:bg-[#ff4d4d] selection:text-black flex justify-center">
            <div className="w-full max-w-2xl bg-[#111] border border-[#333] p-8 relative">
                <Link href="/dashboard" className="absolute top-4 right-4 text-xs text-gray-500 hover:text-[#ff4d4d]">
                    X_İPTAL
                </Link>
                <h1 className="text-xl font-bold text-[#ff4d4d] mb-6 tracking-widest">[PROJE_DÜZENLE] :: {project.slug}</h1>

                <form action={updateProjectAction} className="space-y-6">
                    <input type="hidden" name="id" value={project.id} />

                    <div>
                        <label className="text-xs text-gray-500 uppercase block mb-2">Proje Başlığı</label>
                        <input name="title" defaultValue={project.title} required className="w-full bg-black border border-[#333] p-3 text-white focus:border-[#ff4d4d] outline-none" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs text-gray-500 uppercase block mb-2">Slug (URL)</label>
                            <input name="slug" defaultValue={project.slug} required className="w-full bg-black border border-[#333] p-3 text-white focus:border-[#ff4d4d] outline-none" />
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 uppercase block mb-2">Etiketler (Virgülle ayır)</label>
                            <input name="tags" defaultValue={project.tags?.join(", ")} className="w-full bg-black border border-[#333] p-3 text-white focus:border-[#ff4d4d] outline-none" />
                        </div>
                    </div>

                    <div>
                        <label className="text-xs text-gray-500 uppercase block mb-2">Proje Linki (Opsiyonel)</label>
                        <input name="link" defaultValue={project.link || ""} className="w-full bg-black border border-[#333] p-3 text-white focus:border-[#ff4d4d] outline-none" />
                    </div>

                    <div>
                        <label className="text-xs text-gray-500 uppercase block mb-2">Kısa Açıklama</label>
                        <textarea name="description" defaultValue={project.description} required rows={3} className="w-full bg-black border border-[#333] p-3 text-white focus:border-[#ff4d4d] outline-none" />
                    </div>

                    <div>
                        <label className="text-xs text-gray-500 uppercase block mb-2">İçerik (HTML/Markdown)</label>
                        <textarea name="content" defaultValue={project.content} required rows={10} className="w-full bg-black border border-[#333] p-3 text-white focus:border-[#ff4d4d] outline-none font-mono text-xs" />
                    </div>

                    <Button className="w-full bg-[#ff4d4d] text-black hover:bg-red-600 font-bold uppercase py-4 rounded-none">
                        GÜNCELLEMEYİ_UYGULA
                    </Button>
                </form>
            </div>
        </main>
    )
}
