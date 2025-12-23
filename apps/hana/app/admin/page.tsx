import { Button } from "@repo/ui";
import Link from "next/link";
import { loginAction } from "../actions";

export default function AdminPage({ searchParams }: { searchParams: { error?: string } }) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#0a0a0a] text-[#e5e5e5] p-6 selection:bg-[#bd93f9] selection:text-black">
            <div className="w-full max-w-sm">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold tracking-tighter mb-2">Yönetici Paneli</h1>
                    <p className="text-[#666] text-xs font-mono uppercase tracking-widest">Sistem Erişim Protokolü v2</p>
                </div>

                {searchParams.error && (
                    <div className="bg-red-500/10 border border-red-500/50 p-2 mb-4 text-[10px] text-red-500 text-center font-mono">
                        !! DOĞRULAMA BAŞARISIZ !!
                    </div>
                )}

                <div className="bg-[#111] border border-[#333] p-8 rounded-sm shadow-2xl">
                    <form action={loginAction} className="space-y-4">
                        <div>
                            <label className="block text-[10px] uppercase tracking-wider text-[#666] mb-1 font-mono">E-Posta Adresi</label>
                            <input
                                name="email"
                                type="email"
                                className="w-full bg-black/50 border border-[#333] p-2 text-sm text-white focus:border-[#bd93f9] outline-none rounded-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] uppercase tracking-wider text-[#666] mb-1 font-mono">Güvenlik Anahtarı</label>
                            <input
                                name="password"
                                type="password"
                                className="w-full bg-black/50 border border-[#333] p-2 text-sm text-white focus:border-[#bd93f9] outline-none rounded-sm"
                            />
                        </div>

                        <Button className="w-full bg-[#bd93f9] text-black hover:bg-[#a77df5] rounded-sm font-bold text-xs uppercase py-3 tracking-widest mt-2">
                            Panele Bağlan
                        </Button>
                    </form>
                </div>

                <div className="mt-8 text-center">
                    <Link href="/" className="text-[10px] text-[#444] hover:text-[#bd93f9] font-mono transition-colors">
                        [ İPTAL_ET VE ÇIK ]
                    </Link>
                </div>
            </div>
        </main>
    );
}
