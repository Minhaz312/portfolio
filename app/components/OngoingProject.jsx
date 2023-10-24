export default function OngoingProject({project}) {
    const features = project.features.split(",");
    const technology = project.features.split(",");
    let featureList = []
    let doneFeatures = []
    let pendingFeatures = []
    let waitingFeatures = []
    let technologyList = []
    features.map(f=>{
        const featureName = f.split("|")
        featureList.push({status:featureName[0],name:featureName[1]})
    })
    technology.map(f=>{
        const techName = f.split("|")
        technologyList.push({name:techName[0],color:techName[1]})
    })

    featureList.map(item=>{
        if(item.status==="done") doneFeatures.push(item)
        else if(item.status==="pending") pendingFeatures.push(item)
        else waitingFeatures.push(item)
    })

  return (
    <div className='w-full my-5 p-3 bg-[#151030]'>
        <h2 className='text-white font-semibold text-xl text-center mb-5'>{project.title}</h2>
        <div className='w-full grid grid-cols-5 gap-3'>
            <div className='col-span-5 md:col-span-2'>
                <img src={`/storage/${project.thumbnile}`} className='w-full sm:w-[60%] mx-auto md:w-full' />
            </div>
            <div className='col-span-5 md:col-span-3'>
                <p className='text-slate-300'>{project.desc}</p>
                <div className='mt-3 flex items-center gap-x-2'>
                <a href={project.links.split(",")[0]} target='_blank'>
                    <img src='/images/github-icon.png' className='h-8 w-8 rounded-full' />
                </a>
                <a href={project.links.replace("|null","").split(",")[1]} target='_blank'>
                    <img src='/images/view-icon.png' className='h-8 w-8 rounded-full' />
                </a>
                </div>
                <div className='flex items-center gap-1 flex-wrap mt-3'>
                <h5 className='text-slate-200 font-semibold text-lg mr-3'>Technologies:</h5>
                    {project.technologies.split(",").map((tech,i)=><p key={i} style={{color:tech.split("|")[1]}} className={``}>#{tech.split("|")[0]}</p>)}
                </div>
                <div>
                <h5 className='text-slate-200 font-semibold text-lg mb-3'>Features:</h5>
                <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-2'>
                    <div>
                        {doneFeatures.map((feature,i)=><div key={i} className='flex items-center gap-x-3 mb-2'>
                            <img src='/images/done.png' className='h-[20px] w-[20px]' />
                            <p className='text-slate-300 font- text-sm'>{feature.name}</p>
                        </div>)}
                    </div>
                    <div>
                        {pendingFeatures.map((feature,i)=><div key={i} className='flex items-center gap-x-3 mb-2'>
                            <img src='/images/pending.png' className='h-[18px] w-[18px]' />
                            <p className='text-slate-300 font- text-sm'>{feature.name}</p>
                        </div>)}
                    </div>
                    <div>
                        {waitingFeatures.map((feature,i)=><div key={i} className='flex items-center gap-x-3 mb-2'>
                            <img src='/images/waiting.png' className='h-[18px] w-[18px]' />
                            <p className='text-slate-300 font- text-sm'>{feature.name}</p>
                        </div>)}
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
  )
}
