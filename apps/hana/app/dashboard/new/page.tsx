import { Button } from "@repo/ui";
import { createProjectAction } from "../../actions";
import Link from "next/link";

export default function NewProjectPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] p-8 flex justify-center selection:bg-[#bd93f9] selection:text-black">
            <div className="w-full max-w-3xl">
                <header className="mb-8 flex justify-between items-center border-b border-[#333] pb-4">
                    <h1 className="text-2xl font-bold tracking-tight">Yeni Sistem Kaydı</h1>
                    <Link href="/dashboard" className="text-xs text-[#bd93f9] font-mono hover:underline">
                        &lt; GERİ DÖN
                    </Link>
                </header>

                <form action={createProjectAction} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label className="block text-[10px] uppercase text-[#666] mb-1 font-mono">Proje Adı</label>
                        <input name="title" required className="w-full bg-[#111] border border-[#333] p-3 text-sm focus:border-[#bd93f9] outline-none rounded-sm" />
                    </div>

                    <div>
                        <label className="block text-[10px] uppercase text-[#666] mb-1 font-mono">Benzersiz Kimlik (Slug)</label>
                        <input name="slug" required className="w-full bg-[#111] border border-[#333] p-3 text-sm focus:border-[#bd93f9] outline-none rounded-sm" />
                    </div>

                    <div>
                        <label className="block text-[10px] uppercase text-[#666] mb-1 font-mono">Teknoloji Yığını (Tags)</label>
                        <input name="tags" className="w-full bg-[#111] border border-[#333] p-3 text-sm focus:border-[#bd93f9] outline-none rounded-sm" placeholder="Next.js, AI, Cloud" />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-[10px] uppercase text-[#666] mb-1 font-mono">Harici Erişim Bağlantısı</label>
                        <input name="link" className="w-full bg-[#111] border border-[#333] p-3 text-sm focus:border-[#bd93f9] outline-none rounded-sm" placeholder="https://..." />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-[10px] uppercase text-[#666] mb-1 font-mono">Özet Açıklama</label>
                        <textarea name="description" required rows={3} className="w-full bg-[#111] border border-[#333] p-3 text-sm focus:border-[#bd93f9] outline-none rounded-sm" />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-[10px] uppercase text-[#666] mb-1 font-mono">Dokümantasyon (İçerik)</label>
                        <textarea name="content" required rows={12} className="w-full bg-[#111] border border-[#333] p-3 text-sm focus:border-[#bd93f9] outline-none rounded-sm font-mono" />
                    </div>

                    <div className="md:col-span-2 pt-4">
                        <Button className="w-full bg-[#bd93f9] text-black hover:bg-[#a77df5] font-bold text-xs uppercase py-4 rounded-sm tracking-widest">
                            SİSTEME KAYDET
                        </Button>
                    </div>
                </form>
            </div>
        </main>
    )
}
