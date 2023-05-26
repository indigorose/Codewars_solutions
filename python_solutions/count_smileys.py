def count_smileys(arr):
    # return the number of valid smiley faces in array/list
    count = 0
    for i in arr:
        if ((':' in i) or (';' in i)) and ((')' in i) or ('D' in i)):
            if(('-' in i) or ('~' in i)):
                count += 1
            elif (len(i) == 2 and ((':' in i) or (';' in i)) and ((')' in i) or ('D' in i))):
                count +=1
    return count

count_smileys([':D',':~)',';~D',':)'])
count_smileys([':)',':(',':D',':O',':;'])
count_smileys([';]', ':[', ';*', ':$', ';-D'])
