import React from 'react'

export default function MyInfo({
    name,
    designation,
    age,
    residence,
    freelance,
    address,
    phone,
    email,
}) {
    return (
        <div className="border-[#585d65] border rounded-[32px]">
            <div className="p-[30px] max-w-full overflow-hidden flex flex-col h-full justify-between gap-8">
                <div>
                    <h2 className="font-extrabold text-2xl">{name}</h2>
                    <h4 className="font-bold clr-theme text-[11px] mt-1 uppercase">{designation}</h4>
                </div>
                <div className="flex flex-col gap-4 text-[14px]">
                    <div className="flex flex-wrap gap-3 font-bold">
                        <h2 className="uppercase clr-theme w-[12ch]">E-mail:</h2>
                        <h2 className="text-ellipsis">{email}</h2>
                    </div>
                    <div className="flex flex-wrap gap-3 font-bold">
                        <h2 className="uppercase clr-theme w-[12ch]">Age:</h2>
                        <h2 className="">{age}</h2>
                    </div>
                    <div className="flex flex-wrap gap-3 font-bold">
                        <h2 className="uppercase clr-theme w-[12ch]">Residence:</h2>
                        <h2 className="">{residence}</h2>
                    </div>
                    <div className="flex flex-wrap gap-3 font-bold">
                        <h2 className="uppercase clr-theme w-[12ch]">Freelance:</h2>
                        <h2 className="">{freelance}</h2>
                    </div>
                    <div className="flex flex-wrap gap-3 font-bold">
                        <h2 className="uppercase clr-theme w-[12ch]">Address:</h2>
                        <h2 className="">{address}</h2>
                    </div>
                    <div className="flex flex-wrap gap-3 font-bold">
                        <h2 className="uppercase clr-theme w-[12ch]">Phone:</h2>
                        <h2 className="">{phone}</h2>
                    </div>
                </div>
                
                <div>
                    <h4 className="font-mf-dafoe">Rohit</h4>
                </div>
            </div>
        </div>
    );
}