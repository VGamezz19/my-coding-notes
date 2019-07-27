//
//  ViewController.swift
//  HelloWorld
//
//  Created by Victor Gamez on 27/07/2019.
//  Copyright © 2019 Victor Gamez. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet var ourLabel: UILabel!
    var count: Int = 0
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    @IBAction func buttonPressed(sender: AnyObject) {
        count += 1
        ourLabel.text = "You clicked " + String(count)
    }


}

