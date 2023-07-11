// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    if (blocks>=42) {
        return blocks-42;
    }else{
        return 42-blocks;
    }
}

console.log (distanceFromHqInBlocks(50))

function distanceFromHqInFeet(blocks) {
    const blocksDistance = distanceFromHqInBlocks(blocks);
    const feetPerBlock = 264;
    return blocksDistance * feetPerBlock;
}

console.log(distanceFromHqInFeet(50))

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    let blocksTravelled = Math.abs (destination - start);
    if(blocksTravelled < 0){
        return blocksTravelled = -blocksTravelled;
    }else{
        return blocksTravelled * feetPerBlock;
    }
   
}

function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distanceInFeet = Math.abs(destination - start) * feetPerBlock;

    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        const farePrice = (distanceInFeet - 400) * 0.02;
        return farePrice;  
    }else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    }else  {
        return 'cannot travel that far';
    }
    
}

