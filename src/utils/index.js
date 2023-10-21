export function getCompanyStatus(status){
    switch(status){
        case "Active":
            return(
                <span className="py-1 px-2 rounded-md text-base  text-green-900 bg-green-200">
                    {status}
                </span>
            )
            case "Draft":
            return(
                <span className="py-1 px-2 rounded-md text-base  text-gray-900 bg-gray-200">
                    {status}
                </span>
            )
    }
}