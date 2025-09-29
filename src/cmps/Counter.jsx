import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

export function Counter() {
  const { ref, inView } = useInView({
    triggerOnce: true, // מפעיל רק פעם אחת
    threshold: 0.1     // אחוז חשיפה של האלמנט לפני שהאנימציה מתחילה
  })

  return (
    <section className="counter" ref={ref}>
      <div className="counter-card">
        <p className="counter-title">Years Of Experience</p>
        <p className="counter-number">
          +{inView && (
            <CountUp start={0} end={3} duration={3} />
          )}
        </p>
      </div>

      <div className="counter-card">
        <p className="counter-title">Transformed Brands</p>
        <p className="counter-number">
          +{inView && (
            <CountUp start={0} end={150} duration={6} />
          )}
        </p>
      </div>

      <div className="counter-card">
        <p className="counter-title">CUSTOMER satisfaction</p>
        <p className="counter-number">
          {inView && (
            <CountUp start={0} end={100} duration={9} />
          )}%
        </p>
      </div>
    </section>
  )
}
