import { MdDashboard } from "react-icons/md";
import { RxActivityLog } from "react-icons/rx";
import { IoMdAnalytics } from "react-icons/io";
import { TbTransactionRupee } from "react-icons/tb";
import { MdHelpCenter } from "react-icons/md";

const navlinks = [
  {
    name: "Dashboard",
    icon: <MdDashboard />,
  },

  {
    name: "Activity",
    icon: <RxActivityLog />,
  },
  {
    name: "Analytics",
    icon: <IoMdAnalytics />,
  },
  {
    name: "Transactions",
    icon: <TbTransactionRupee />,
  },
  {
    name: "Help Center",
    icon: <MdHelpCenter />,
  },
];

function NavigationBar() {
  return (
    <div className="w-1/6 h-screen flex flex-col border border-r-1 px-10 py-12">
      <div className=" flex space-x-2 items-center">
        <img className="w-10 h-10 rounded-full"
          src="https://img.magnific.com/free-psd/money-illustration-isolated_23-2151568514.jpg"
          alt="Logo"
        />
        <span>Money Tracker</span>
      </div>
      <div className="mt-9 flex flex-col space-y-8">
        {navlinks.map((item, index) => (
          <div key={index} className="flex space-x-3">
            <span className="text-xl">{item.icon}</span>
            <span>{item?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavigationBar;
