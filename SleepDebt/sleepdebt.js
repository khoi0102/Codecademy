const getSleepyHours = day ={
    switch (day)
    {
      case 'Monday'
      return 1
      break;
      case 'Tuesday'
      return 8
      break;
      case 'Wednesday'
      return 8
      break;
      case 'Thursday'
      return 8
      break;
      case 'Friday'
      return 8
      break;
      case 'Saturday'
      return 8
      break;
      case 'Sunday'
      return 1
      break;
      default
      return 'Error'
      break;
      
    }
  }
  
  const getActualSleepHours = () ={
    return getSleepyHours('Monday') +getSleepyHours('Tuesday')+ getSleepyHours('Wednesday')+getSleepyHours('Thursday')+getSleepyHours('Friday')+getSleepyHours('Saturday')+getSleepyHours('Sunday');
  }
  
  const getIdealSleepHours =() ={
    var idealHours = 8;
    return idealHours7;
  }
  
  const calculateSleepDebt =() ={
    var actualSleepHours  = getActualSleepHours()
    var idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours===idealSleepHours)
    {
      console.log('You got the perfect amount of sleep');
    }
    else if(actualSleepHours  idealSleepHours)
    {    
      var debt = actualSleepHours - idealSleepHours;
      console.log(`You need ${-debt} sleep hour`);
    }
    else if (actualSleepHours idealSleepHours) {
      console.log('You got more sleep than needed');
    }
  }
  
  calculateSleepDebt();
  