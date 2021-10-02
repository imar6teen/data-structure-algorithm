coins = [ 500, 1000, 2000]
change = 8000
hasil = []

def coin_change(c):
  if c == 0:
    return [[]]     
  if c < 0:
    return []      
  else:
    all_combos = []
    for i in coins:
      recursive_result = coin_change(c-i)
      for combo in recursive_result:
        combo.append(i)
      all_combos.extend(recursive_result)

    return all_combos

result = coin_change(change)
for combo in result:
  print(combo) 
  # if(len(combo) >= len(result)):
  #   continue
  # hasil = combo
  # print(hasil)