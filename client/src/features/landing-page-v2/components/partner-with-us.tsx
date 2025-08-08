import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function PartnerWithUs() {

    return (
        <section className="section">
            <div className="content">
                <h2 className="heading--center">Partner with us</h2>
                <p className="text-xl text-center mb-8">
                    Uhamba is unlocking potential where others aren&apos;t looking. Whether you're an educator, funder, or partner—we invite you to shape the future with us.
                </p>
                <div className='grid md:grid-cols-2 gap-4 py-8'>
                    <div className='flex items-center justify-center'>
                        <img src='https://marvel-b1-cdn.bc0a.com/f00000000295839/red.msudenver.edu/wp-content/uploads/2023/10/CallMeMiSTER_8830_AlysonMcClaran_09252023_.jpg' alt={`Photo CTA`}
                            className="rounded-xl aspect-[1/1] h-fit w-fit object-cover"
                            width={300}
                            height={400} />
                    </div>
                    <div>
                        <form className="my-auto p-6 md:p-8">
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="organization">Organization</Label>
                                    <Input id="organization" type="text" required />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="message">Messafe</Label>
                                    <Textarea id='message' />
                                </div>
                                <Button type="submit" variant="default" className="w-full text-white">
                                    Send
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    );
}