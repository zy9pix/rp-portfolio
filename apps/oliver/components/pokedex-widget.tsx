"use client";
import { useEffect, useState } from "react";

interface Pokemon {
    name: string;
    sprites: {
        front_default: string;
    };
    types: { type: { name: string } }[];
}

export function PokedexWidget() {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        // Random ID between 1 and 151 (Gen 1)
        const id = Math.floor(Math.random() * 151) + 1;
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
            .then((data) => setPokemon(data))
            .catch((err) => console.error(err));
    }, []);

    if (!pokemon) return <div className="animate-pulse text-[#ff4d4d] font-mono text-xs">LOADING_DATA...</div>;

    return (
        <div className="fixed bottom-8 right-8 w-64 border-2 border-[#ff4d4d] bg-black p-4 font-mono hidden lg:block shadow-[4px_4px_0px_0px_rgba(255,77,77,0.5)]">
            <div className="flex items-center justify-between mb-2">
                <span className="text-[#ff4d4d] text-xs">POKEDEX_V0.1</span>
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
            </div>
            <div className="bg-[#1a1a1a] p-2 border border-[#333] mb-2 flex justify-center">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-24 h-24 pixelated" />
            </div>
            <div className="text-white text-sm uppercase font-bold tracking-wider mb-1">
                {pokemon.name}
            </div>
            <div className="flex gap-2">
                {pokemon.types.map((t) => (
                    <span key={t.type.name} className="text-[10px] uppercase bg-[#333] px-1 text-gray-400">
                        {t.type.name}
                    </span>
                ))}
            </div>
        </div>
    );
}
