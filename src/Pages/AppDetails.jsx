import React from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();

  const app = apps.find((a) => String(a.id) === id);
  if (loading) return <p>Loading......</p>;
  //   console.log(app);

  const {
    title,
    image,
    ratingAvg,
    companyName,
    downloads,
    reviews,
    size,
    description,
  } = app || {};

  const handleAddToInstallation = () => {
    const existingList = JSON.parse(localStorage.getItem("installed"));
    let updatedList = [];

    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === app.id);
      if (isDuplicate) {
        return alert("this app is already Installed");
      }
      updatedList = [...existingList, app];
    } else {
      updatedList.push(app);
    }
    localStorage.setItem("installed", JSON.stringify(updatedList));
    // console.log(app);
  };

  return (
    <div className="bg-[#F1F5E8]">
      {
        <div className="p-5 md:p-10 lg:p-20">
          <div className="md:flex md:gap-10">
            <img
              src={image}
              alt=""
              className="w-[350px] h-[350px] border rounded-sm"
            />
            <div>
              <div className="pb-[30px]">
                <h2 className="font-bold text-[30px]">{title}</h2>
                <p className="font-bold text-[20px]">
                  Developed by{" "}
                  <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">
                    {companyName}
                  </span>
                </p>
              </div>
              <hr className="opacity-20" />
              <div className="pt-7.5 flex gap-8 pb-7.5">
                <div className="">
                  <img
                    src="/assets/icon-downloads.png"
                    alt=""
                    className="w-10 h-10"
                  />
                  <p>Downloads</p>
                  <h2 className="font-extrabold text-[40px]">{downloads}</h2>
                </div>
                <div className="">
                  <img
                    src="/assets/icon-ratings.png"
                    alt=""
                    className="w-10 h-10"
                  />
                  <p>Average Ratings</p>
                  <h2 className="font-extrabold text-[40px]">{ratingAvg}</h2>
                </div>
                <div className="">
                  <img
                    src="/assets/icon-review.png"
                    alt=""
                    className="w-10 h-10"
                  />
                  <p>Total Reviews</p>
                  <h2 className="font-extrabold text-[40px]">{reviews}</h2>
                </div>
              </div>
              <button
                className="bg-[#00D390] px-5 py-3 rounded-sm "
                onClick={handleAddToInstallation}
              >
                Install Now ({size} MB)
              </button>
            </div>
          </div>
          <hr className="opacity-20 my-10" />
          <div>
            <h4 className="font-semibold text-2xl pb-6">Ratings </h4>
          </div>
          <hr className="opacity-20 my-10" />
          <div className="space-y-6" >
            <h4 className="font-semibold text-2xl  ">Description</h4>
            <p>{description}</p>
            <p>
            This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
            </p>
            <p>
                A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
            </p>
<p>
    For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.
</p>
          </div>
        </div>
      }
    </div>
  );
};

export default AppDetails;
