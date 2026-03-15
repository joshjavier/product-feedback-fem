import ToggleButton from './toggle-button';

export default function TitleCard() {
  return (
    <div className="bg-primary-500 flex items-center justify-between px-6 py-4 text-white">
      <div>
        <p className="text-[15px] font-bold tracking-[-0.19px]">Frontend Mentor</p>
        <h1 className="text-[13px] font-medium opacity-75">Feedback Board</h1>
      </div>
      <ToggleButton />
    </div>
  );
}
