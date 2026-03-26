import { profile } from "../data/profile";

export default function StatusBar() {
  const { currentlyStudying, latestProject, status } = profile.statusBar;
  return (
    <div className="overflow-hidden whitespace-nowrap border-t border-white/10 py-2">
      <div className="animate-marquee text-gray-400">
        CURRENTLY_STUDYING: {currentlyStudying} •
        LATEST_PROJECT: {latestProject} •
        STATUS: {status}
      </div>
    </div>
  );
}