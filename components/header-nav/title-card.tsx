import ToggleButton from './toggle-button';

export default function TitleCard() {
  return (
    <div className="bg-primary-500 flex w-full items-center justify-between bg-[url(/assets/shared/suggestions/mobile/background-header.png)] bg-cover px-6 text-white max-md:h-(--header-height) md:items-end md:rounded-[10px] md:bg-[url(/assets/shared/suggestions/tablet/background-header.png)] md:p-6 lg:min-h-34.25">
      <div>
        <p className="text-[15px] font-bold tracking-[-0.19px] md:text-[20px] md:tracking-[-0.25px]">
          Frontend Mentor
        </p>
        <h1 className="text-[13px] font-medium opacity-75 md:text-[15px]">Feedback Board</h1>
      </div>
      <ToggleButton />
    </div>
  );
}
