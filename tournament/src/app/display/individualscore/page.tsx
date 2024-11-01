"use client"

import React, { useEffect, useState } from 'react';
import ButtonLeft from '@/app/components/btnleft';
import ButtonRight from '@/app/components/btnright';
import ResultScore from '@/app/components/resultscore';
import { useTournament } from '@/app/functions/tournamentcontext';

interface Player {
    _id: string;
    name: string;
    scores: {
        totalScore: number;
    };
}

const IndividualScore: React.FC = () => {
    const { tournament } = useTournament();
    const [players, setPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/players`);
                const data = await response.json();
                setPlayers(data);
            } catch (error) {
                console.error("Error fetching players:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlayers();
    }, []);

    if (loading) {
        return <p>Loading...</p>; 
    }

    const sortedPlayers = [...players].sort((a, b) => b.scores.totalScore - a.scores.totalScore);

    return (
        <div className="h-screen relative flex flex-col items-center justify-center text-white">
            <div className="relative bg-darkBlue bg-opacity-70 shadow-2xl w-[52%] h-[68%] flex flex-col justify-center items-center rounded-xl pb-3">
                <div className='flex justify-center items-center pt-12 pb-3'>
                    <p className='text-4xl font-bold'>Individual Score</p>
                </div>
                <div className='flex gap-8 flex-wrap justify-center pt-3 pb-8 overflow-y-auto mt-2 mb-1'>
                    {sortedPlayers.slice(0, 10).map((player, index) => (
                        <ResultScore 
                            key={player._id} 
                            playerName={player.name} 
                            totalScore={player.scores.totalScore} 
                            position={index + 1} 
                            isAlternate={index % 2 !== 0}
                        />
                    ))}
                </div>

                <div className="absolute -top-9">
                    <div className="bg-lightYellow p-3 px-5 rounded-xl shadow-xl">
                        <p className="text-4xl font-bold">{tournament?.name ?? "Tournament Name"}</p>
                    </div>
                </div>
                
            </div>
            <div className='absolute bottom-10 left-10'>
                <ButtonLeft route='/display/displayscore'/>
            </div>
            <div className='absolute bottom-10 right-10 opacity-70'>
                <ButtonRight/>
            </div>
            
        </div> 
    );
}

export default IndividualScore;