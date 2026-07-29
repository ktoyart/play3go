import InnerPage from "../components/InnerPage";

export default function AuthPage() {
  return (
    <InnerPage title="Sign in">
      <div className="max-w-md mx-auto mt-12 p-8 rounded-2xl bg-white/[3%] outline outline-offset-[-1px] outline-white/5">
        <p className="text-white/50 mb-6 text-center">
          This is a demo sign-in page. All links are functional for portfolio presentation.
        </p>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF86AB]/50 transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF86AB]/50 transition-colors"
          />
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#B6004C] to-[#590000] text-white font-medium hover:shadow-[0_4px_20px_rgba(255,0,77,0.3)] transition-shadow">
            Continue
          </button>
        </div>
      </div>
    </InnerPage>
  );
}
