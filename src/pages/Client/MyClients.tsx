
import PieChart from '../../components/Charts/PieChart'
import StoredVehicle from '../../components/Charts/StoredVehicle'
import DefaultLayout from '../../layout/DefaultLayout'
import DataTable from './components/DataTable'
import TableRowww from './components/TableRow'
import TierForm from './components/TierForm'

const MyClients = () => {
  return (
    <>
     <DefaultLayout>
    <div className=''>

    <div className='bg-lightBlue'>

<TierForm/> 

</div>
<div>
<DataTable/>
</div>
<div>
  <TableRowww/>
</div>


    </div>
    <div className='md:flex '>
    <PieChart />
<StoredVehicle/>
    </div>
    </DefaultLayout>
   
    </>
  )
}

export default MyClients