"use client";

import React, { useEffect, useState } from 'react';


import ButtonLeft from '@/app/components/btnleft'
import ButtonRight from '@/app/components/btnright'
import TeamScoreComponent from '@/app/components/teamscore';
import TournamentName from '@/app/components/tournamentname';

interface Team {
    _id: string;
    teamName: string;
    totalTeamScore: number;
}

function TopTeams(){
    const [teams, setTeams] = useState<Team[]>([]);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/team-scores`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Fetched teams:', data);
                setTeams(data);
            } catch (error: any) {
                console.error('Error fetching team scores:', error);
            }
        };

        fetchTeams();
    }, []);
    return(
        <div className="h-screen relative flex flex-col items-center justify-center text-white">
            <div className="relative bg-darkBlue bg-opacity-70 shadow-2xl w-[52%] h-[68%] flex flex-col justify-center items-center rounded-xl pb-3">
                <div className='flex justify-center items-center pt-12 pb-3'>
                    <p className='text-4xl font-bold'>Top Four Teams</p>
                </div>
                <div className='flex gap-8 flex-wrap justify-center pt-3 pb-8 mt-2 mb-1'>
                    {teams.slice(0, 4).map((team, index) => (
                        <TeamScoreComponent 
                            key={team._id} 
                            teamName={team.teamName} 
                            totalScore={team.totalTeamScore} 
                            position={index + 1} 
                            isAlternate={index % 2 !== 0} 
                        />
                    ))}
                </div>

                <div className="absolute -top-9">
                    <div className="bg-lightYellow p-3 px-5 rounded-xl shadow-xl">
                        <TournamentName/>
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
    )
}

export default TopTeams;