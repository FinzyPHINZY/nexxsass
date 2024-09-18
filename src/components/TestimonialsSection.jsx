import Tagline from './Tagline'

const TestimonialsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <Tagline>Testimonials</Tagline>
      <h2 className="text-3xl font-bold text-center mt-4">
        What builders say about us
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 items-center max-w-screen-xl text-left">
        <div className="grid gap-4 ">
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3">
              <img
                src="/testimonials/1.png"
                alt="User Image"
                className="w-12 h-12 rounded-full"
              />
              <p className="">User</p>
            </div>
            <p className="text-sm py-4">
              <span className="">
                The AI Form Builder has revolutionized the way we collect data.
                It's incredibly intuitive and has saved us countless hours of
                manual work. The dynamic form adjustments are a game-changer.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3">
              <img
                src="/testimonials/2.png"
                alt="User Image"
                className="w-12 h-12 rounded-full"
              />
              <p className="">User</p>
            </div>
            <p className="text-sm py-4">
              <span className="">
                The security features gives me peace of mind knowing our data is
                protected. Plus, the support team is always there when we need
                them.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3">
              <img
                src="/testimonials/3.png"
                alt="User Image"
                className="w-12 h-12 rounded-full"
              />
              <p className="">User</p>
            </div>
            <p className="text-sm py-4">
              <span className="">
                I love the seamless integrations and the advanced customization
                options. it's perfect for our growing business needs.
              </span>
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3">
              <img
                src="/testimonials/4.png"
                alt="User Image"
                className="w-12 h-12 rounded-full"
              />
              <p className="">User</p>
            </div>
            <p className="text-sm py-4">
              <span className="">
                The AI Form Builder has revolutionized the way we collect data.
                It's incredibly intuitive and has saved us countless hours of
                manual work. The dynamic form adjustments are a game-changer.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3">
              <img
                src="/testimonials/5.png"
                alt="User Image"
                className="w-12 h-12 rounded-full"
              />
              <p className="">User</p>
            </div>
            <p className="text-sm py-4">
              <span className="">
                The security features gives me peace of mind knowing our data is
                protected. Plus, the support team is always there when we need
                them.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3">
              <img
                src="/testimonials/6.png"
                alt="User Image"
                className="w-12 h-12 rounded-full"
              />
              <p className="">User</p>
            </div>
            <p className="text-sm py-4">
              <span className="">
                I love the seamless integrations and the advanced customization
                options. it's perfect for our growing business needs.
              </span>
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          {' '}
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3">
              <img
                src="/testimonials/7.png"
                alt="User Image"
                className="w-12 h-12 rounded-full"
              />
              <p className="">User</p>
            </div>
            <p className="text-sm py-4">
              <span className="">
                The AI Form Builder has revolutionized the way we collect data.
                It's incredibly intuitive and has saved us countless hours of
                manual work. The dynamic form adjustments are a game-changer.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3">
              <img
                src="/testimonials/8.png"
                alt="User Image"
                className="w-12 h-12 rounded-full"
              />
              <p className="">User</p>
            </div>
            <p className="text-sm py-4">
              <span className="">
                The security features gives me peace of mind knowing our data is
                protected. Plus, the support team is always there when we need
                them.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3">
              <img
                src="/testimonials/9.png"
                alt="User Image"
                className="w-12 h-12 rounded-full"
              />
              <p className="">User</p>
            </div>
            <p className="text-sm py-4">
              <span className="">
                I love the seamless integrations and the advanced customization
                options. it's perfect for our growing business needs.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
