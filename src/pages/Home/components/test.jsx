{/* <Container>
  <div className="content">
    <Container>
      <Row className="content__container">
        <Col className="content_container_image" sm={12} md={6}>
          <img
            src="https://ik.imagekit.io/itsrakesh/Portfolio/projects-illustration_dRQbe5kVkFw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644134494977"
            alt="Projects illustration"
            loading="lazy"
          />
        </Col>
        <Col className="content_container_details" sm={12} md={6}>
          <div>
            <h1>
              <AnimatedCounter end={50} duration={1} />
              <span style={{ color: '#8ED2A9' }}>+</span>
            </h1>
            <h6>Completed projects</h6>
            <h2>Glad to help you!</h2>
            <p>
              As a web developer, technical writer and a passionate learner, I'm
              always on the lookout for new challenges and opportunities to
              further improve my knowledge and skills.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    
    <div className="content__recent-projects">
      <div className="content_recent-projects_header">
        <h2>Recent Projects</h2>
        <Link to="/work/projects">
          <AnimatedButton>View&nbsp;More</AnimatedButton>
        </Link>
      </div>
      <Row>
        {props.error}
        {!props.isLoading &&
          props.projects &&
          props.projects.slice(0, 2).map((project, i) => {
            return (
              <Col key={i} className="mt-5" sm={12} md={6}>
                <ProjectCard
                  title={project.title}
                  image={project.image}
                  repoName={project.repoName}
                  liveUrl={project.liveUrl}
                  techs={project.techs}
                />
              </Col>
            );
          })}
      </Row>
      {props.isLoading && (
        <Row>
          {[...Array(2)].map((_, i) => {
            return (
              <Col key={i} className="mt-5" sm>
                <LoadingProjectCard />
              </Col>
            );
          })}
        </Row>
      )}
    </div>
    <Container>
      <div className="content__strengths">
        <h2 className="content_strengths_header">
          Why Hire Me<span style={{ color: '#FF5403' }}>?</span>
        </h2>
        <Row className="strengths">
          <Col sm={6} md={6} lg={3}>
            <StrengthItem
              image="https://ik.imagekit.io/itsrakesh/Portfolio/communicative_9gtXcXgTB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644134493404"
              title="Communicative"
              description="I balance talking and listening hence ensuring effective
                      communication."
            />
          </Col>
          <Col sm={6} md={6} lg={3}>
            <StrengthItem
              image="https://ik.imagekit.io/itsrakesh/Portfolio/collaborative_-lWdw0PUM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644134493423"
              title="Collaborative"
              description="Teamwork makes the dream work. Collaboration first, then
                      work."
            />
          </Col>
          <Col sm={6} md={6} lg={3}>
            <StrengthItem
              image="https://ik.imagekit.io/itsrakesh/Portfolio/work-ethic_jaB_-v1Sr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644134495355"
              title="Work Ethic"
              description="I don't wait for deadlines, deadlines wait for me."
            />
          </Col>
          <Col sm={6} md={6} lg={3}>
            <StrengthItem
              image="https://ik.imagekit.io/itsrakesh/Portfolio/self-motivation_PLXNT-6da.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644134495068"
              title="Self Motivated"
              description="I put myself into action to achieve my goals."
            />
          </Col>
        </Row>
      </div>
    </Container>
  </div>
</Container>; */}
