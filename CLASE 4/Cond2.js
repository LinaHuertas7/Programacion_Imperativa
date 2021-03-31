function gastoEnCombustible(vehiculo, kms_recorridos, litros_consumidos){   
     
    switch (vehiculo) {
        case "coche":
          return (kms_recorridos*litros_consumidos)*0.10
          
        break;
      case "autobus":
            return (kms_recorridos*litros_consumidos)*0.5
        break;
      case "moto":
            return (kms_recorridos*litros_consumidos)*0.2
        break;
    }
  }
  
  console.log(gastoEnConbustible("autobus", 1000, 50));
  console.log(gastoEnConbustible("moto", 10, 50));
  console.log(gastoEnConbustible("coche", 30, 20));