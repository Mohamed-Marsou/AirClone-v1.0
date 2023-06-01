import React from "react";
import  "../../style/dashboard.css"

const AprListings = ()=>{
    return(
        <div>

<link
	href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
	rel="stylesheet"/>
<div className="flex items-center justify-center  ">
	<div className="col-span-12">
		<div className="overflow-auto lg:overflow-visible ">
			<table className="table text-gray-400 border-separate space-y-6 text-sm">
				<thead className="bg-gray-800 text-gray-500">
					<tr>
						<th className="p-3">Brand</th>
						<th className="p-3 text-left">Category</th>
						<th className="p-3 text-left">Price</th>
						<th className="p-3 text-left">Status</th>
						<th className="P-3 text-left">Check it </th>
						<th className="p-3 text-left">Aprove</th>
						<th className="p-3 text-left">Reject</th>
					</tr>
				</thead>
				<tbody>
					<tr className="bg-gray-800">
						<td className="p-3">
							<div className="flex align-items-center">
								<img className="rounded-full h-12 w-12  object-cover" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image"/>
								<div className="ml-3">
									<div className="">Appple</div>
									<div className="text-gray-500">mail@rgmail.com</div>
								</div>
							</div>
						</td>
						<td className="p-3">
							Technology
						</td>
						<td className="p-3 font-bold">
							200.00$
						</td>
						<td className="p-3">
							<span className="bg-orange-400 text-gray-50  rounded-md px-2">Pending</span>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
								<i title="Check Listing" className="material-icons-outlined text-base Check">visibility</i>
                            </a>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                            <i title="Aprove Listing" className="material-icons-outlined text-base Aprove">check_circle</i>
							</a>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                            <i  title="Reject Listing" className="material-icons-outlined text-base Reject">cancel</i>
							</a>
						</td>
					</tr>
						
                    <tr className="bg-gray-800">
						<td className="p-3">
							<div className="flex align-items-center">
								<img className="rounded-full h-12 w-12  object-cover" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image"/>
								<div className="ml-3">
									<div className="">Appple</div>
									<div className="text-gray-500">mail@rgmail.com</div>
								</div>
							</div>
						</td>
						<td className="p-3">
							Technology
						</td>
						<td className="p-3 font-bold">
							200.00$
						</td>
						<td className="p-3">
							<span className="bg-orange-400 text-gray-50  rounded-md px-2">Pending</span>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
								<i title="Check Listing" className="material-icons-outlined text-base Check">visibility</i>
                            </a>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                            <i title="Aprove Listing" className="material-icons-outlined text-base Aprove">check_circle</i>
							</a>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                            <i  title="Reject Listing" className="material-icons-outlined text-base Reject">cancel</i>
							</a>
						</td>
					</tr>

                    <tr className="bg-gray-800">
						<td className="p-3">
							<div className="flex align-items-center">
								<img className="rounded-full h-12 w-12  object-cover" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image"/>
								<div className="ml-3">
									<div className="">Appple</div>
									<div className="text-gray-500">mail@rgmail.com</div>
								</div>
							</div>
						</td>
						<td className="p-3">
							Technology
						</td>
						<td className="p-3 font-bold">
							200.00$
						</td>
						<td className="p-3">
							<span className="bg-orange-400 text-gray-50  rounded-md px-2">Pending</span>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
								<i title="Check Listing" className="material-icons-outlined text-base Check">visibility</i>
                            </a>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                            <i title="Aprove Listing" className="material-icons-outlined text-base Aprove">check_circle</i>
							</a>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                            <i  title="Reject Listing" className="material-icons-outlined text-base Reject">cancel</i>
							</a>
						</td>
					</tr>


                    <tr className="bg-gray-800">
						<td className="p-3">
							<div className="flex align-items-center">
								<img className="rounded-full h-12 w-12  object-cover" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image"/>
								<div className="ml-3">
									<div className="">Appple</div>
									<div className="text-gray-500">mail@rgmail.com</div>
								</div>
							</div>
						</td>
						<td className="p-3">
							Technology
						</td>
						<td className="p-3 font-bold">
							200.00$
						</td>
						<td className="p-3">
							<span className="bg-orange-400 text-gray-50  rounded-md px-2">Pending</span>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
								<i title="Check Listing" className="material-icons-outlined text-base Check">visibility</i>
                            </a>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                            <i title="Aprove Listing" className="material-icons-outlined text-base Aprove">check_circle</i>
							</a>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                            <i  title="Reject Listing" className="material-icons-outlined text-base Reject">cancel</i>
							</a>
						</td>
					</tr>



                    <tr className="bg-gray-800">
						<td className="p-3">
							<div className="flex align-items-center">
								<img className="rounded-full h-12 w-12  object-cover" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image"/>
								<div className="ml-3">
									<div className="">Appple</div>
									<div className="text-gray-500">mail@rgmail.com</div>
								</div>
							</div>
						</td>
						<td className="p-3">
							Technology
						</td>
						<td className="p-3 font-bold">
							200.00$
						</td>
						<td className="p-3">
							<span className="bg-orange-400 text-gray-50  rounded-md px-2">Pending</span>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
								<i title="Check Listing" className="material-icons-outlined text-base Check">visibility</i>
                            </a>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                            <i title="Aprove Listing" className="material-icons-outlined text-base Aprove">check_circle</i>
							</a>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                            <i  title="Reject Listing" className="material-icons-outlined text-base Reject">cancel</i>
							</a>
						</td>
					</tr>



                    <tr className="bg-gray-800">
						<td className="p-3">
							<div className="flex align-items-center">
								<img className="rounded-full h-12 w-12  object-cover" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image"/>
								<div className="ml-3">
									<div className="">Appple</div>
									<div className="text-gray-500">mail@rgmail.com</div>
								</div>
							</div>
						</td>
						<td className="p-3">
							Technology
						</td>
						<td className="p-3 font-bold">
							200.00$
						</td>
						<td className="p-3">
							<span className="bg-orange-400 text-gray-50  rounded-md px-2">Pending</span>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
								<i title="Check Listing" className="material-icons-outlined text-base Check">visibility</i>
                            </a>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                            <i title="Aprove Listing" className="material-icons-outlined text-base Aprove">check_circle</i>
							</a>
						</td>
						<td className="p-3 ">
							<a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                            <i  title="Reject Listing" className="material-icons-outlined text-base Reject">cancel</i>
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>

        </div>
    )
}

export default AprListings;