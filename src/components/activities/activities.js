import Slider from "../carousel/slider";

import "./activities.css";

function Activities({ activities }) {
  return (
    <>
      {activities.map(activity => {
        return (
          <article key={activity.id}>
            <div className="informations">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
            <Slider pictures={activity.images || []} />
          </article>
        )
      })}
    </>
  )
}

export default Activities;