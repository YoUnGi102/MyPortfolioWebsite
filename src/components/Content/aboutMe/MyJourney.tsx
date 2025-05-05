import './MyJourney.css';
import '../../../animations/image-mask.scss';
import MaskedImage from '../../../animations/ImageMask';

const MyJourney = () => {
  return (
    <div className="MyJourney section-container">
      <div className="section-content">
        <h2>👨‍💻 My Journey</h2>

        <section>
          <p>
            From a very young age, I was passionate about science, especially
            mathematics and physics. Around the age of 14, I discovered
            programming and began learning to code using C#. I explored both
            functional and object-oriented programming and created a few simple
            projects that deepened my understanding. A year later, I decided to
            apply to a specialized high school focused on Information and
            Networking Technologies.
          </p>
        </section>

        <section>
          <MaskedImage
            src="files/images/spse-campus.jpg"
            alt="High School"
            mask="files/images/masks/spse-logo-mask.svg"
            className="section-image"
          />
          <div>
            <p>
              After passing the admission tests, I was accepted and spent the
              next four years studying programming, networking, electrotechnics,
              electronics, computer hardware, and robotics.
            </p>
            <p>
              I participated in several programming competitions, which
              sharpened my analytical and problem-solving skills. I also made
              many friends who shared my passion for learning, and met great
              teachers who challenged and supported me along the way.
            </p>
            <p>
              In my final year, I received an opportunity to apply to
              universities in Denmark. While the idea of moving abroad was
              exciting, it was also intimidating — I didn’t know anyone there,
              and it was far from home. But I’ve always welcomed challenges, so
              I applied and was accepted to VIA University College.
            </p>
          </div>
        </section>

        <section>
          <MaskedImage
            src="files/images/via-campus.jpg"
            alt="Studying Abroad"
            mask="files/images/masks/via-logo-mask.svg"
            className="section-image"
          />
          <div>
            <p>
              Moving to Denmark was a major step. I quickly made friends and
              settled in with a few classmates. During my time at VIA, I
              deepened my knowledge of software design principles, explored
              modern technologies, and learned about areas such as DevOps,
              Network Security, Computer Architecture, and Machine Learning.
            </p>
            <p>
              Machine Learning became a particular interest. For my Bachelor’s
              thesis, I teamed up with two classmates to work on Agricultural
              Land Detection for a company called Aeon. We experimented with
              various ML algorithms and neural networks, ultimately choosing
              Convolutional Autoencoders for their superior performance. With
              strong guidance from our supervisor and valuable support from the
              company, we delivered a successful project.
            </p>
            <p>
              In January 2025, I graduated with a Bachelor’s degree and began
              preparing for my next challenge — joining the tech industry.
            </p>
          </div>
        </section>

        <section>
          <MaskedImage
            src="files/images/ness-ke.jpg"
            alt="Internship"
            mask="files/images/masks/ness-ke-mask.svg"
            invertMask={false}
            className="section-image"
          />
          <div>
            <p>
              As part of my studies, I completed a five-month internship at Ness
              KE in Košice, Slovakia, near my hometown. I joined a team working
              on a ticketing portal for HC Košice, one of the country’s most
              popular hockey teams.
            </p>
            <p>
              There, I gained firsthand experience working on a real-world
              product using technologies like React, Node.js, and TypeScript.
              Initially, I was intimidated by the fast-paced environment and the
              experience level of my teammates, but I quickly adapted. My
              supervisor and colleagues were supportive, helping me onboard and
              start contributing to feature development early on.
            </p>
            <p>
              At times, I had to take responsibility for key tasks
              independently, which helped build both my technical and
              communication skills. It was a transformative experience that gave
              me confidence in my ability to work as part of a professional
              engineering team.
            </p>
          </div>
        </section>

        <section>
          <p>
            Looking back, each step of my journey — from writing my first lines
            of C# code to completing my Bachelor’s thesis and contributing to a
            live project — has shaped me into a curious and motivated software
            engineer. I thrive in environments where I can keep learning, solve
            real-world problems, and collaborate with others who are passionate
            about technology.
          </p>
          <p>
            Even after earning my degree, I’ve continued growing my skillset —
            completing professional development courses from IBM on Coursera and
            beginning work on a personal project called{' '}
            <strong>MealPrepTracker</strong>. It’s an app designed to store
            recipes and track meal calories, inspired by my passion for fitness
            and healthy living.
          </p>
          <p>
            As I step into the next chapter of my career, I’m excited to
            continue building meaningful software, learning from experienced
            teams, and contributing to impactful projects.
          </p>
        </section>
      </div>
    </div>
  );
};

export default MyJourney;
