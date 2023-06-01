import React from "react";


const Admins = () => {

    return (
        <>
            <div>

                <link
                    href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
                    rel="stylesheet" />
                <div className="flex items-center justify-center  ">
                    <div className="col-span-12">
                        <div className="overflow-auto lg:overflow-visible ">
                            <table className="table text-gray-400 border-separate space-y-6 text-sm">
                                <thead className="bg-gray-800 text-gray-500">
                                    <tr>
                                        <th className="a-i" >admin info</th>
                                        <th className="p-3 text-left">Role</th>
                                        <th className="p-3 text-left">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-gray-800">
                                        <td className="p-3">
                                            <div className="flex align-items-center">
                                                <img className="rounded-full h-12 w-12  object-cover" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image" />
                                                <div className="ml-3">
                                                    <div className="">Mohamed T Marsou</div>
                                                    <div className="text-gray-500">MTM@MTM.com</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-3">
                                            Super Admin
                                        </td>
                                      
                                        <td className="p-3">
                                            <span className="bg-green-400 text-gray-50 rounded-md px-3 py-1">active</span>
                                        </td>
                                    </tr>
                                  
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admins;