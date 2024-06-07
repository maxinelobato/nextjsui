import { Button } from '@nextui-org/button'
import { Card, CardFooter, CardHeader } from '@nextui-org/card'
import { Image } from '@nextui-org/react'

export default function Home() {
  return (
    <>
      <section>
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p className="hidden text-gray-500 sm:mt-4 sm:block">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              dolor officia blanditiis repellat in, vero, aperiam porro ipsum
              laboriosam consequuntur exercitationem incidunt tempora nisi?
            </p>

            <div className="mt-4 md:mt-8">
              <Button
                disableRipple
                className="relative overflow-visible rounded-full bg-black/30 px-12 text-white shadow-xl after:absolute after:inset-0 after:z-[-1] after:rounded-full after:bg-black/40 after:transition after:!duration-500 after:content-[''] hover:-translate-y-1 hover:after:scale-150 hover:after:opacity-0"
                size="lg"
              >
                Entre em contato
              </Button>
            </div>

            {/* <div className="mt-4 md:mt-8">
              <div className="mx-auto max-w-fit">
                <Card isFooterBlurred radius="lg" className="border-none">
                  <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    height={200}
                    src="https://nextui.org/images/hero-card.jpeg"
                    width={200}
                  />
                  <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
                    <p className="text-tiny text-white/80">Available soon.</p>
                    <Button
                      className="bg-black/20 text-tiny text-white"
                      variant="flat"
                      color="default"
                      radius="lg"
                      size="sm"
                    >
                      Notify me
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div> */}
            <div className="grid max-w-7xl grid-cols-12 grid-rows-2 gap-2 px-8">
              <Card className="col-span-12 h-auto sm:col-span-4">
                <CardHeader className="absolute top-1 z-10 flex-col !items-start">
                  <p className="text-tiny font-bold uppercase text-white/60">
                    What to watch
                  </p>
                  <h4 className="text-large font-medium text-white">
                    Stream the Acme event
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 h-full w-full object-cover"
                  src="https://nextui.org/images/card-example-4.jpeg"
                />
              </Card>
              <Card className="col-span-12 h-auto sm:col-span-4">
                <CardHeader className="absolute top-1 z-10 flex-col !items-start">
                  <p className="text-tiny font-bold uppercase text-white/60">
                    Plant a tree
                  </p>
                  <h4 className="text-large font-medium text-white">
                    Contribute to the planet
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 h-full w-full object-cover"
                  src="https://nextui.org/images/card-example-3.jpeg"
                />
              </Card>
              <Card className="col-span-12 h-auto sm:col-span-4">
                <CardHeader className="absolute top-1 z-10 flex-col !items-start">
                  <p className="text-tiny font-bold uppercase text-white/60">
                    Supercharged
                  </p>
                  <h4 className="text-large font-medium text-white">
                    Creates beauty like a beast
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 h-full w-full object-cover"
                  src="https://nextui.org/images/card-example-2.jpeg"
                />
              </Card>
              <Card
                isFooterBlurred
                className="col-span-12 h-[300px] w-full sm:col-span-5"
              >
                <CardHeader className="absolute top-1 z-10 flex-col items-start">
                  <p className="text-tiny font-bold uppercase text-white/60">
                    New
                  </p>
                  <h4 className="text-2xl font-medium text-black">
                    Acme camera
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card example background"
                  className="z-0 h-full w-full -translate-y-6 scale-125 object-cover"
                  src="https://nextui.org/images/card-example-6.jpeg"
                />
                <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
                  <div>
                    <p className="text-tiny text-black">Available soon.</p>
                    <p className="text-tiny text-black">Get notified.</p>
                  </div>
                  <Button
                    className="text-tiny"
                    color="primary"
                    radius="full"
                    size="sm"
                  >
                    Notify Me
                  </Button>
                </CardFooter>
              </Card>
              <Card
                isFooterBlurred
                className="col-span-12 h-[300px] w-full sm:col-span-7"
              >
                <CardHeader className="absolute top-1 z-10 flex-col items-start">
                  <p className="text-tiny font-bold uppercase text-white/60">
                    Your day your way
                  </p>
                  <h4 className="text-xl font-medium text-white/90">
                    Your checklist for better sleep
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 h-full w-full object-cover"
                  src="https://nextui.org/images/card-example-5.jpeg"
                />
                <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 bg-black/40 dark:border-default-100">
                  <div className="flex flex-grow items-center gap-2">
                    <Image
                      alt="Breathing app icon"
                      className="h-11 w-10 rounded-full bg-black"
                      src="https://nextui.org/images/breathing-app-icon.jpeg"
                    />
                    <div className="flex flex-col">
                      <p className="text-tiny text-white/60">Breathing App</p>
                      <p className="text-tiny text-white/60">
                        Get a good nights sleep.
                      </p>
                    </div>
                  </div>
                  <Button radius="full" size="sm">
                    Get App
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
