function areAnangrams(s1, s2){
    if(s1.length != s2.length){
        return false;
    }
    var freq1 = {}
    var freq2 = {}
    for(var ch in s1){
        if(ch in freq1){
            freq1[ch] += 1;
        }
        else{
            freq1[ch] = 1;
        }
    }
    for(ch in s2){
        if(ch in freq2){
            freq2[ch] += 1;
        }
        else{
            freq2[ch] = 1;
        }
    }
    for(var key in freq1){
        if(key !in freq2 || freq1[key] != freq2[key]){
            return false;
        }
        return true;
    }
}