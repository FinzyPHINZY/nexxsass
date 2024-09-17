import MileStone from './MileStone'

const roadmap = [
  {
    id: 1,
    name: 'Project Kickoff',
    description: 'Kick-off meeting and requirement gathering',
  },
  {
    id: 2,
    name: 'Design & Development',
    description: 'Create wireframes, mockups, and design specs',
  },
  {
    id: 3,
    name: 'Development',
    description: 'Build the main features and components',
  },
  {
    id: 4,
    name: 'Testing & QA',
    description: 'Test and refine the application',
  },
  {
    id: 5,
    name: 'Launch & Marketing',
    description: 'Launch the application and promote it',
  },
]

const RoadMapSection = () => {
  return (
    <section className="max-w-80 mx-auto">
      <h1 className="font-semibold text-3xl text-center mb-16">Roadmap</h1>
      {roadmap.map((roadmapItem, i) => (
        <MileStone
          key={i}
          title={roadmapItem.name}
          description={roadmapItem.description}
          lastItem={i === roadmap.length - 1}
        />
      ))}
    </section>
  )
}

export default RoadMapSection
