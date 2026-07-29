import InnerPage from "../../components/InnerPage";

export default function BuyPage() {
  return (
    <InnerPage title="Order a server">
      <p className="text-white/50 mb-8">
        Select a configuration to proceed. This is a demo checkout page for portfolio presentation.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { name: "Basic VPS", specs: "1 vCPU • 1 GB RAM • 15 GB SSD", price: "150 ₽/mo" },
          { name: "Standard VPS", specs: "2 vCPU • 2 GB RAM • 30 GB SSD", price: "290 ₽/mo" },
          { name: "Advanced VPS", specs: "4 vCPU • 4 GB RAM • 60 GB SSD", price: "550 ₽/mo" },
        ].map((plan, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/[3%] outline outline-offset-[-1px] outline-white/5 hover:outline-[#FF86AB]/20 hover:bg-white/[5%] smooth cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
            <p className="text-white/50 mb-4">{plan.specs}</p>
            <p className="text-[#FF86AB] text-2xl font-semibold">{plan.price}</p>
          </div>
        ))}
      </div>
    </InnerPage>
  );
}
