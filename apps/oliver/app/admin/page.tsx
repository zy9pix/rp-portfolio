import { Button } from "@repo/ui";
import Link from "next/link";
import { loginAction } from "../actions";

export default function AdminPage({ searchParams }: { searchParams: { error?: string } }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-black text-[#ff4d4d] font-mono selection:bg-[#ff4d4d] selection:text-black">
            <div className="w-full max-w-md border border-[#ff4d4d] p-8 relative">
                {/* Decorations */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-[#ff4d4d]" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-[#ff4d4d]" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#ff4d4d]" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#ff4d4d]" />

                <h1 className="text-2xl font-bold mb-6 tracking-widest text-center">
                    [SUDO_LOGIN]
                </h1>

                {searchParams.error && (
                    <div className="bg-[#ff4d4d]/10 border border-[#ff4d4d] p-3 mb-6 text-xs text-[#ff4d4d] text-center font-bold">
                        HATA: ERİŞİM REDDEDİLDİ
                    </div>
                )}

                <form action={loginAction} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest opacity-80">Kullanıcı_Adı</label>
                        <input
                            name="username"
                            type="text"
                            className="w-full bg-[#111] border border-[#333] p-3 text-white focus:border-[#ff4d4d] outline-none transition-colors font-mono"
                            placeholder="root"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest opacity-80">Parola</label>
                        <input
                            name="password"
                            type="password"
                            className="w-full bg-[#111] border border-[#333] p-3 text-white focus:border-[#ff4d4d] outline-none transition-colors font-mono"
                            placeholder="••••••••"
                        />
                    </div>

                    <Button className="w-full bg-[#ff4d4d] text-black hover:bg-red-600 rounded-none font-bold uppercase tracking-widest py-4 mt-4">
                        Kimlik_Doğrula
                    </Button>
                </form>

                <div className="mt-8 text-center">
                    <Link href="/" className="text-xs text-[#666] hover:text-[#ff4d4d] underline-offset-4 hover:underline">
                        {`<-- SİSTEME_GERİ_DÖN`}
                    </Link>
                </div>
            </div>
        </main>
    );
}
