// import Image from 'next/image'
// import Ball from '../../assets/ball.png'
// import QR from '../../assets/qr.png'
// import ButtonLeft from '@/app/components/btnleft'
// import ButtonRight from '@/app/components/btnright'
// import { useTournament } from '@/app/functions/tournamentcontext';

function ScanQR(){
    // const { tournament } = useTournament();
    return(
        <div className="h-screen relative flex flex-col items-center justify-center text-white">
            {/* <div className='pb-8'>
                <div className="-rotate-6 text-3xl font-extrabold uppercase flex flex-col items-center">
                    <p className="shadow-xl">Tournament</p>
                    <div className='flex gap-3'>
                        <Image src={Ball} width={50} alt='' className='shadow-2xl'/>
                        <p className='pt-2 shadow-2xl'>App</p>
                    </div>
                </div>
            </div>
            <div className="pb-4">
                <div className="bg-lightYellow p-3 px-5 rounded-xl shadow-xl">
                    <p className="text-4xl font-bold">{tournament?.name ?? "Tournament Name"}</p>
                </div>
            </div>
            <div className='py-3'>
                <p className='text-3xl text-center font-bold'>Registration has been started</p>
            </div>
            <div className="border-8 border-stone-900 bg-white w-[48%] h-[48%] flex justify-center items-center">
                <Image src={QR} width={310} alt='' />
            </div>
            <div className="pt-4">
                <p className="text-4xl font-bold shadow-">Scan QR</p>
            </div>
            <div className='absolute bottom-10 left-10'>
                <ButtonLeft/>
            </div>
            <div className='absolute bottom-10 right-10'>
                <ButtonRight/>
            </div>
             */}
        </div> 
    )
}

export default ScanQR;